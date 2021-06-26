## Note에 대충 정리한 내용 -> 수정 및 정리 필요
Yarn dev

1. Check node.js version
2. npx create-next-app [project-name] (npx is excute directly)
3. Yarn dev (dev server)

디렉토리 구조 ( pages, api) 등

Pages 밑에 js 파일 만들면 next가 그 경로로 페이지를 만들어 준다.

아마 컨벤션은 소문자 인듯


Pages/zzid (zzid/index.js)

Pages/zzid/test (zzid/test.js)


Next 는 <a> 에 href 쓰지 않고 다른방식을 쓴다 .. -> 나중에


<Link> 를 쓰면 다른 html 페이지를 서버에 요청하는게 아니라
js로 렌더 하기때문에 훨씬 빠르다

[Code splitting]
자동으로 잘된다?..


모든 페이지에서 공통으로 출력되는 부분 Layout.js를 만들어서

_app.js에 wrapping 해준다.


404.js [notfound page)

<Image>  사용하는 이유
-> 자동적으로 lazy load ( 필요한 순간이 오면 그떄 로드 -> 렌더 한다) :: 최적화

Metadata ( <meta> ) 는 Head (‘next/head’) 에 쓰면 된다. 어떤 js 에든 쓰면 된다. 각각 html 따로 있는거기 때문에? 아마도


getStaticProps()


[Dynamic route] 
e.g) /:id
-> js 파일 이름을 [id].js 형식으로 생성
getStaticPaths() => getStaticProps() => Component(props)
-> 내려오는 데이터의 개수(id로 dynamic route를 했다면 내려오는 id 개수 만큼)  만큼 호출이 되는 로직이다.
-> 그 개수 만큼 html 파일도 생성된다.



----------------------------------------------
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
