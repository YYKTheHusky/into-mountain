import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Toast from 'utils/sweetAlertConfig.js'
// scss
import styles from 'pages/SingleTrailPage/SingleTrailPage.module.scss'

// svg
import { ReactComponent as FavoriteIcon } from 'assets/icons/icon-label.svg'
import { ReactComponent as ShareIcon } from 'assets/icons/share-icon.svg'

// components
import TrailReport from 'components/TrailsInformation/TrailReport'
import { SecondaryButton } from 'components/Button/Button'
import InformationTable from 'components/TrailsInformation/InformationTable'
import MapTable from 'components/TrailsInformation/MapTable.jsx'
import MainLayout from 'components/MainLayout/MainLayout'
import ReportModal from 'components/Modal/ReportModal'
import WholePageModal from 'components/Modal/WholePageModal'
// api
import {
  addFavoriteTrail,
  deleteFavoriteTrail,
  getConditions,
  getOneTrail
} from 'api/trail'

export default function SingleTrailPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { trailID } = useParams()
  const [activeTab, setActiveTab] = useState(null)
  const [isReportModalOpen, setIsReportModalOpen] = useState(false)
  const [data, setData] = useState(null)
  const [report, setReport] = useState(null)
  const [reRender, setReRender] = useState(false)

  // 按收藏/取消收藏
  const handleCollect = async () => {
    if (!data.isFavorite) {
      const { success } = await addFavoriteTrail(trailID)
      if (success) {
        const updatedData = { ...data, isFavorite: true }
        setData(updatedData)
      } else {
        Toast.fire({
          icon: 'error',
          title: '收藏時遇到一點問題!'
        })
      }
    } else if (data.isFavorite) {
      const { success } = await deleteFavoriteTrail(trailID)
      if (success) {
        const updatedData = { ...data, isFavorite: false }
        setData(updatedData)
      } else {
        Toast.fire({
          icon: 'error',
          title: '取消收藏時遇到一點問題!'
        })
      }
    }
  }

  useEffect(() => {
    if (location.pathname.includes('detail')) {
      setActiveTab('detail')
    } else if (location.pathname.includes('gpx')) {
      setActiveTab('gpx')
    }
  }, [navigate])

  useEffect(() => {
    const getData = async () => {
      const [{ trailData }, { report }] = await Promise.all([
        getOneTrail(trailID),
        getConditions(trailID)
      ])
      setData(trailData)
      setReport(report)
    }
    getData()
  }, [])

  useEffect(() => {
    const needReRender = async () => {
      if (reRender) {
        const { report } = await getConditions(trailID)
        setReport(report)
        setReRender(false)
      }
    }
    needReRender()
  }, [reRender])

  return (
    <MainLayout>
      {data && (
        <WholePageModal>
          {/* 標題、圖片、步道回報 */}
          <section className={styles.trailNameAndPhoto}>
            <div className={styles.nameAndLike}>
              <h2 className={styles.title}>{data.title}</h2>
              <div className={styles.socialButtons}>
                <div
                  className={`cursor-point ${styles.favorite}`}
                  onClick={handleCollect}
                >
                  <FavoriteIcon
                    className={`${styles.icon} ${
                      data.isFavorite && styles.favoriteActive
                    }`}
                  />
                  <span>收藏</span>
                </div>
                <div className={`cursor-point ${styles.share}`}>
                  <ShareIcon className={styles.icon} />
                  <span>分享</span>
                </div>
              </div>
            </div>
            <div className={styles.photoAndReport}>
              <div className={styles.photoContainer}>
                <img className={styles.photo} src={data.image} alt="步道圖片" />
              </div>
              <div className={styles.reportContainer}>
                <div className={styles.reportHeader}>
                  <h4>路況回報</h4>
                  <div className={styles.reportButton}>
                    <SecondaryButton onClick={() => setIsReportModalOpen(true)}>
                      我要回報
                    </SecondaryButton>
                  </div>
                  <ReportModal
                    isReportModalOpen={isReportModalOpen}
                    setIsReportModalOpen={setIsReportModalOpen}
                    trailId={data.id}
                    setReRender={setReRender}
                  />
                </div>
                <div className={styles.reports}>
                  {report &&
                    report.map((item) => (
                      <TrailReport key={item.id} report={item} />
                    ))}
                </div>
              </div>
            </div>
          </section>
          {/* 基本介紹 */}
          <section className={styles.trailIntroduction}>
            <h4>路線介紹</h4>
            <span>{data.introduction}</span>
          </section>
          {/* 詳細資料 */}
          <section className={styles.trailDetail}>
            <div className={styles.tabs}>
              <Link to={`/trail/${data.id}/detail`}>
                <div
                  className={`cursor-point ${styles.tabOne} ${
                    activeTab === 'detail' && styles.active
                  }`}
                >
                  <h4>基本資訊</h4>
                </div>
              </Link>
              <Link to={`/trail/${data.id}/gpx`}>
                <div
                  className={`cursor-point ${styles.tabTwo} ${
                    activeTab === 'gpx' && styles.active
                  }`}
                >
                  <h4>路線地圖</h4>
                </div>
              </Link>
            </div>
            <div className={styles.information}>
              {activeTab === 'detail' && <InformationTable data={data} />}
              {activeTab === 'gpx' && <MapTable data={data} />}
            </div>
          </section>
        </WholePageModal>
      )}
    </MainLayout>
  )
}
