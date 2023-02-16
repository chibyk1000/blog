
import { useNavigate } from 'react-router-dom'
const Home = ({ blog }) => {
  const navigate = useNavigate()
  return (
    <div className='blog-home'>
      <h1>All Blogs</h1>

      <div className='blogs'>
        {
          blog.map((item) => {
            return (
              <div className='blog' key={item.id}>
                <p className='title'>{item.title}</p>
        
                <button onClick={() => {
                  navigate(`/details/${item.id}`)
                }}>Read More</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home