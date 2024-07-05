"use client"

import Header from "../common/Header";
import Nav from "../common/Nav";
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { addPostAPI } from "../apis/post";

type Inputs = {
  title: string;
  content: string;
  published: boolean;
  highlight: boolean;
}

export default function AddPostPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const published = watch("published");
  const highlight = watch("highlight");

  const onSubmit: SubmitHandler<Inputs> = useCallback(()=>{
    // logInAPI({ email, password })
    // .then((data) => {
    //     console.log('login page', data);
    //     typeof window !== 'undefined' ? localStorage?.setItem('authorization', data.accessToken) as unknown as string : null;
    //     router.replace('/');
    // })
    // .catch((error: any) => {
    //     alert(error.response.data);
    // })
    // .finally(() => {
    //     setLoading(false);
    // });
    addPostAPI({title, content, published, highlight})
    .then((data) => {
      typeof window !== 'undefined' ? localStorage?.setItem('authorization', data.accessToken) as unknown as string : null;
        router.replace('/');
    })
    .catch((error: any) => {
      alert(error.response.data);
    })
    .finally(() => {
      setLoading(false);
    });
    console.log(published, highlight)
},[router, watch]);

  return (
    <div>
      <Header />
      <Nav />
      <div>
        <h2>글쓰기</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-4 items-center'>
          <div><input type="text" placeholder="제목" {...register("title")} /></div>
          <div><textarea placeholder="내용" {...register("content")} /></div>
          <div>
            <div>공개여부</div>
            <input type="radio" {...register("published")} value="true" />
            <input type="radio" {...register("published")} value="false" />
          </div>
          <div>
            <div>하이라이트 여부</div>
            <input type="radio" {...register("highlight")} value="true" />
            <input type="radio" {...register("highlight")} value="false" />
          </div>
          <div>
                {
                    loading
                    ? <input type="submit" value="SignUp"  className="border border-slate-400 p-2 w-36 loading"  />
                    : <input type="submit" value="SignUp"  className="border border-slate-400 p-2 w-36"  />
                }
            </div>
        </form>
      </div>
    </div>
  );
}