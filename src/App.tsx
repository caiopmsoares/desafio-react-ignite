import styles from './App.module.css'
import { Header } from './components/Header'
import { Post } from './components/Post'
import './global.css'

const posts = [
	{
		id: 1,

		content: [
			{
				type: 'paragraph',
				content:
					'Lorem accusantium atque, maiores sed odit quos iste repudiandae molestias non assumenda ad maxime ea quam deleniti!',
			},
			{ type: 'paragraph', content: 'Lorem accusantium atque' },
			{
				type: 'paragraph',
				content: 'molestias non assumenda ad maxime ea quam deleniti!',
			},
		],
	},
]

export function App() {
	return (
		<>
			<Header />
			<main className="App">
				{posts.map(post => {
					return <Post key={post.id} content={post.content} />
				})}
			</main>
		</>
	)
}
