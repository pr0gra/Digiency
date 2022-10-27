import styles from './OurWork.module.css'
import { useState } from 'react'
import { OurWorkNav } from '../OurWorkNav/OurWorkNav'
import { useGetOurWorksQuery } from '../../../../../redux'
import { Picture } from '../../../../components/Picture/Picture'

interface ourWorkProject {
  id: number
  projectType: string
  img: string
}

export function OurWork() {
  const [projectType, setProjectType] = useState('All')

  const { data, isLoading, isError } = useGetOurWorksQuery()
  if (isLoading) {
    return <h2>Loading</h2>
  }
  if (isError) {
    return <h2>Error</h2>
  }

  return (
    <div className={styles['our-work']}>
      <div className={styles['our-work-text-part']}>
        <p className={styles['our-work-text-part-subtitle']}>Our Work</p>
        <h2 className={styles['our-work-text-part-title']}>
          We Have Some <span>Designed & Development</span> Projects
        </h2>
      </div>
      <OurWorkNav setProjectType={setProjectType} />
      <div className="our-work-images-part">
        {projectType == 'All'
          ? data.map((project: ourWorkProject) => {
              return (
                <Picture
                  imgName={project.img}
                  onMouseOver={e =>
                    (e.currentTarget.src =
                      '../../../../assets/images/team-member-web-developer.jpg')
                  }
                />
              )
            })
          : data
              .filter((project: ourWorkProject) => {
                return project.projectType === projectType
              })
              .map((project: ourWorkProject) => {
                return <Picture imgName={project.img} />
              })}
      </div>
    </div>
  )
}
