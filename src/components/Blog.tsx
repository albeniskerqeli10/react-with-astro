import type {FunctionComponent } from 'react'
export interface BlogProps  {
id:number;
title:string;
imageUrl:string;
}

const Blog: FunctionComponent<BlogProps> = ({id,title,imageUrl,}) => {
return (
    <article key={id} className="w-[500px] rounded-sm shadow-lg [vertical-align:top] bg-white flex items-center justify-center flex-col">
                <img loading="lazy" className="w-full max-w-full h-[250px] object-cover" src={imageUrl} alt="pic"/>

        <h1 className='text-xl font-bold py-3 px-3'>{title}
        </h1>
    </article>
)

}
export default Blog;