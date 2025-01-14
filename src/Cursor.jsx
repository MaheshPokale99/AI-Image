import React, { useEffect } from "react";
import gsap from "gsap"; // Corrected import

const Cursor = () => {
  useEffect(() => {
    const $bigBall = document.querySelector('.cursor__ball--big');
    const $smallBall = document.querySelector('.cursor__ball--small');
    const $hoverables = document.querySelectorAll('.hoverable');

    // Move the cursor
    const onMouseMove = (e) => {
      gsap.to($bigBall, 0.4, {
        x: e.pageX - 30, // Adjusted for larger cursor
        y: e.pageY - 30, // Adjusted for larger cursor
      });
      gsap.to($smallBall, 0.1, {
        x: e.pageX - 5,
        y: e.pageY - 7,
      });
    };

    // Hover an element
    const onMouseHover = () => {
      gsap.to($bigBall, 0.3, { scale: 4 });
    };

    const onMouseHoverOut = () => {
      gsap.to($bigBall, 0.3, { scale: 1 });
    };

    // Event Listeners
    document.body.addEventListener('mousemove', onMouseMove);
    $hoverables.forEach((el) => {
      el.addEventListener('mouseenter', onMouseHover);
      el.addEventListener('mouseleave', onMouseHoverOut);
    });

    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
      $hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseHover);
        el.removeEventListener('mouseleave', onMouseHoverOut);
      });
    };
  }, []);

  return (
    <div className="cursor">
      <div className="cursor__ball cursor__ball--big">
        <svg height="50" width="50">
          <circle cx="25" cy="25" r="20" strokeWidth="0" fill="transparent"></circle> {/* Set fill to transparent */}
        </svg>
      </div>
      <div className="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Cursor;