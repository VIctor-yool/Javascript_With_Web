import { main__Text } from "./head.js";

import { loadingFirst, loadingSecond, loadingText } from "./loading.js";
import {
  close,
  hamburger,
  sideBarMenu,
  sideItems,
  sideOptions,
} from "./sideBar.js";

window.addEventListener("load", () => {
  loadingFirst.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-50vh)" },
      { transform: "translateX(-100vh)" },
      { transform: "translateX(-150vh)" },
      { transform: "translateX(-200vh)" },
    ],
    {
      duration: 2000,
      delay: 800,
      easing: "ease-in-out",
      fill: "forwards",
    }
  );

  loadingSecond
    .animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(50vh)" },
        { transform: "translateX(100vh)" },
        { transform: "translateX(150vh)" },
        { transform: "translateX(200vh)" },
      ],

      {
        duration: 1200,
        delay: 2000,
        easing: "ease-in-out",
        fill: "forwards",
      }
    )
    .finished.then(() => {
      const loading = document.querySelector("#loading");

      loading
        .animate(
          [
            {
              opacity: 1,
            },
            { opacity: 0 },
          ],
          {
            duration: 800,
            easing: "ease",
            fill: "forwards",
          }
        )
        .finished.then(() => {
          loading.remove();
        });
    });

  // 로딩 중 텍스트
  loadingText.animate(
    [
      {
        opacity: 1,
        offset: 0.8, //80%
      },
      {
        opacity: 0,
        offset: 1, //100%
      },
    ],
    {
      duration: 2000,
      easing: "ease",
      fill: "forwards",
      delay: 800,
    }
  );
});

// 메뉴 열기
hamburger.addEventListener("click", () => {
  sideBarMenu.animate(
    [{ transform: "translateX(100%)" }, { transform: "translateX(0%)" }],
    sideOptions
  );
  // 링크를 하나씩 순서대로 표시
  sideItems.forEach((sideItem, i) => {
    sideItem.animate(
      [
        {
          opacity: 0,
          transform: "translateX(2rem)",
        },
        {
          opacity: 1,
          transform: "translateX(0)",
        },
      ],
      {
        duration: 2400,
        delay: 300 * i,
        easing: "ease",
        fill: "forwards",
      }
    );
  });
});

// 메뉴 닫기
close.addEventListener("click", () => {
  sideBarMenu.animate(
    [{ transform: "translateX(0%)" }, { transform: "translateX(100%)" }],
    sideOptions
  );
  sideItems.forEach((sideItem) => {
    sideItem.animate({ opacity: [1, 0] }, sideOptions);
  });
});

const fadeIns = document.querySelectorAll(".fadein");

const obs = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          {
            opacity: 0,
            transform: "translateX(-2rem) translateY(4rem)",
            filter: "blur(.4rem)",
          },
          {
            opacity: 1,
            transform: "translateX(0) translateY(0)",
            filter: "blur(0)",
          },
        ],
        {
          duration: 800,
          easing: "ease",
          fill: "forwards",
          delay: 150 * i,
        }
      );
      observer.unobserve(entry.target);
    }
  });
  
    {threshold: 0.15, rootMargin:
    "0px 0px 10% 0px"}

});

