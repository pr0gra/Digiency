import { teamMembers } from '../../../../../redux'
import styles from './TeamMemberItem.module.css'
import { useState } from 'react'
import cx from 'classnames'
import { Picture } from '../../../../components/Picture/Picture'
import { MediaLinks } from '../../../../components/MediaLinks/MediaLinks'

interface TeamMemberItemProps {
  teamMember: teamMembers
}

export function TeamMemberItem({ teamMember }: TeamMemberItemProps) {
  const [showingHoverContent, setShowingHoverContent] = useState(false)
  return (
    <>
      <div key={teamMember.id} className={styles['scrolling-container']}>
        <Picture
          style={{ width: '270px', height: '250px' }}
          className={styles['picture']}
          onMouseEnter={() => setShowingHoverContent(true)}
          onMouseLeave={() => setShowingHoverContent(false)}
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
        <MediaLinks
          onMouseEnter={() => setShowingHoverContent(true)}
          onMouseLeave={() => setShowingHoverContent(false)}
          className={cx(
            showingHoverContent
              ? styles['media-links-hover']
              : styles['media-links'],
          )}
          facebookLink={teamMember.links.facebook}
          instLink={teamMember.links.instagram}
          twitterLink={teamMember.links.twitter}
          skypeLink={teamMember.links.skype}
        />
      </div>
    </>
  )
}
