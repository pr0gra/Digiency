import { useGetTeamMembersQuery } from '../../../../../redux/digiencyApi'
import { Picture } from '../../../../components/Picture/Picture'
import styles from './TeamMemberScroll.module.css'

interface TeamMemberScrollProps {
  id: number
  avatar: string
  name: string
  position: string
  links: Links
}

interface Links {
  facebook: string
  instagram: string
  twitter: string
  skype: string
}

export function TeamMemberScroll() {
  const { data, isLoading, isError } = useGetTeamMembersQuery()
  if (isLoading) return <h1>loading</h1>
  if (isError) return <h1>Error</h1>

  return (
    <div className={styles['team-member-scroll']}>
      {data.map((teamMember: TeamMemberScrollProps) => {
        return (
          <div key={teamMember.id} className={styles['scrolling-container']}>
            <Picture
              width={`270px`}
              height={`250px`}
              imgName={teamMember.avatar}
            />
            <div className={styles['team-member-text-part']}>
              <h3 className={styles['team-member-text-part-title']}>
                {teamMember.name}
              </h3>
              <p className={styles['team-member-text-part-subtitle']}>
                {teamMember.position}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
