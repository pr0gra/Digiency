import { TeamMemberScroll } from '../TeamMemberScroll/TeamMemberScroll'
import styles from './TeamMember.module.css'

export function TeamMember() {
  return (
    <div className={styles['team-member']}>
      <div className={styles['team-member-text-part']}>
        <p className={styles['team-member-text-part-subtitle']}>Team Member</p>
        <h2 className={styles['team-member-text-part-title']}>
          We Have
          <span> Some Awesome </span>People
        </h2>
      </div>
      <TeamMemberScroll />
    </div>
  )
}
