import Slider from "react-slick";

const SliderArea = () => {
    return(
        <Slider>
        <div>
          <div className="overflow-hidden rounded-full border">
            <img
              src="https://www.gstatic.com/meet/meet_google_one_carousel_promo_icon_0f14bf8fc61484b019827c071ed8111d.svg"
              alt=""
            />
          </div>
          <div className="mt-5 text-center">
            <h2 className="mb-3 text-2xl font-semibold">Unlock Premium meet features</h2>
            <p>
              Enjoy Longer Group calls, noise elimination more with google
              premium plan{" "}
            </p>
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded-full border">
            <img
              src="https://www.gstatic.com/meet/meet_google_one_carousel_promo_icon_0f14bf8fc61484b019827c071ed8111d.svg"
              alt=""
            />
          </div>
          <div className="mt-5 text-center">
            <h2 className="mb-3 text-2xl font-semibold">Unlock Premium meet features</h2>
            <p>
              Enjoy Longer Group calls, noise elimination more with google
              premium plan{" "}
            </p>
          </div>
        </div>
      </Slider>
    )
}

export default SliderArea;