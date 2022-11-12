import {
  ITeamMembers,
  useGetTeamMembersQuery,
} from '../../../../../redux/digiencyApi'
import { TeamMemberItem } from '../TeamMemberItem.tsx/TeamMemberItem'

import styles from './TeamMemberScroll.module.css'

export function TeamMemberScroll() {
  const { data, isLoading, isError } = useGetTeamMembersQuery()
  if (isLoading) return <h1>loading</h1>
  if (isError) return <h1>Error</h1>

  return (
    <div className={styles['team-member-scroll']}>
      {data!.map((teamMember: ITeamMembers) => {
        return <TeamMemberItem key={teamMember.id} teamMember={teamMember} />
      })}
    </div>
  )
}
