export const ParallaxImage = ({ imageUrl }: { imageUrl: string }) => (
  <div
    className="bg-fixed bg-center bg-no-repeat bg-cover h-[400px] relative mb-12 sm:mb-24 w-[100vw] left-1/2 -ml-[50vw]"
    style={{ backgroundImage: `url(${imageUrl})` }}
  ></div>
);
