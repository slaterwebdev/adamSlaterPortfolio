type ParallaxImageProps = {
  imageUrl: string;
};

export const ParallaxImage = ({ imageUrl }: ParallaxImageProps) => (
  <div
    className="parallax-section -mx-12 mb-12 xl:-mx-96"
    style={{ backgroundImage: `url(${imageUrl})` }}
  ></div>
);
