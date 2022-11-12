import { useState } from 'react'
import {
  IOurCaseStudy,
  useGetOurCaseStudyImagesQuery,
} from '../../../../../redux'
import { Picture } from '../../../../components/Picture/Picture'
import { OurCaseStudyNav } from '../OurCaseStudyNav/OurCaseStudyNav'
import styles from './OurCaseStudy.module.css'
import hoverIcon from '../../../../assets/icons/about-us-vector-icon.svg'

export function OurCaseStudy() {
  const [onMouseEnterId, setOnMouseEnterId] = useState(0)
  const [projectType, setProjectType] = useState('All')
  const { data, isLoading, isError } = useGetOurCaseStudyImagesQuery()
  console.log(projectType)

  if (isLoading) {
    return <h2>Loading</h2>
  }
  if (isError) {
    return <h2>Error</h2>
  }
  return (
    <div className={styles['our-case-study']}>
      <div className={styles['text-part']}>
        <p className={styles['subtitle']}>____ Our Case Study ____</p>
        <h2 className={styles['title']}>Our Recent Project</h2>
      </div>
      <OurCaseStudyNav setProjectType={setProjectType} />
      <div className={styles['images-part']}>
        {projectType == 'All'
          ? data!.map(project => {
              return (
                <>
                  <Picture
                    onMouseEnter={() => setOnMouseEnterId(project.id)}
                    onMouseLeave={() => setOnMouseEnterId(0)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    className={styles['picture']}
                    key={project.id}
                    imgName={project.img}
                  >
                    {onMouseEnterId === project.id && (
                      <div className={styles['picture-hover']}>
                        <img
                          className={styles['picture-hover-img']}
                          src={hoverIcon}
                          alt=""
                        />
                        <h3 className={styles['picture-hover-project-type']}>
                          {project.project_type}
                        </h3>
                      </div>
                    )}
                  </Picture>
                </>
              )
            })
          : data!
              .filter((project: IOurCaseStudy) => {
                return project.project_type === projectType
              })
              .map(project => {
                return (
                  <Picture
                    className={styles['picture']}
                    key={project.id}
                    imgName={project.img}
                  />
                )
              })}
      </div>
    </div>
  )
}
