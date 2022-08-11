import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './Comment.module.css'

interface CommentProps {
	content: string
	onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
	const [likeCount, setLikeCount] = useState(0)

	function handleDeleteComment() {
		onDeleteComment(content)
	}

	function handleLikeComment() {
		setLikeCount(likeCount + 1)
	}

	return (
		<div className={styles.comment}>
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}></div>
						<button onClick={handleDeleteComment} title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>
					<p>{content}</p>
				</div>
			</div>
		</div>
	)
}
