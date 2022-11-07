import { useGetTeamMembersQuery } from '../../../../../redux/digiencyApi'
import { TeamMemberItem } from '../TeamMemberItem.tsx/TeamMemberItem'

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
      {data!.map((teamMember: TeamMemberScrollProps) => {
        return <TeamMemberItem teamMember={teamMember} />
      })}
    </div>
  )
}
