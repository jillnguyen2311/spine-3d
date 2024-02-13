import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <Spline scene="https://prod.spline.design/jwjRHvsccI0-xGEW/scene.splinecode" />
      <Spline scene="https://prod.spline.design/xjKS7YXRxbUvT4EZ/scene.splinecode" />
      <Spline scene="https://prod.spline.design/sD2wdThucUvMcK4c/scene.splinecode" />
    </main>
  );
}
