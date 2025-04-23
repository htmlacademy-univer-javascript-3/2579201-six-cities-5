
type OfferGalleryProps = {
  images: string[];
}

const OfferGallery = ({images}: OfferGalleryProps) => (
  <div className="offer__gallery">
    {images.map((image)=>(
      <div key={image} className="offer__image-wrapper">
        <img className="offer__image" src={image} alt="Photo studio" />
      </div>
    ))}
  </div>
);

export {OfferGallery};
