import chevron from '../assets/Chevron right.png';
import Card from './Card';
const Featured = () => {
  return (
    <main>
      <section className="px-3 md:px-4 xl:px-[95px] mt-[70px]">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl sm:text-5xl">Featured Movie</h3>
          <button className="flex items-center gap-3" type="button">
            <p className="text-stars-text-color">See more</p>
            <img src={chevron} alt="chevron right" />
          </button>
        </div>
        <Card />
      </section>
    </main>
  );
};
export default Featured;
