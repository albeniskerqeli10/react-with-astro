import type {FunctionComponent  } from 'react'
import type {BlogProps} from "./Blog";
import Blog from './Blog';

export interface BlogsList {
  blogs:BlogProps[]
}

const Blogs:FunctionComponent<BlogsList>= ({blogs}) => {
  return (
    <div className="w-full px-5 flex items-center gap-10 justify-center flex-row flex-wrap">
        {blogs.map(blog => (
          
          <Blog id={blog.id} title={blog.title} imageUrl={blog.imageUrl}/>
        ))}
    </div>
  )
}

export default Blogs