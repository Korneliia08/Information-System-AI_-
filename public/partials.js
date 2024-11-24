(function() {
  // Funkcja inicjalizująca particlesJS, tylko jeżeli element z id #particles-js istnieje
  function initParticlesJS() {
    const particlesElement = document.getElementById("particles-js");

    if (particlesElement && !particlesElement.hasAttribute("data-particles-initialized")) {
      // Jeżeli element istnieje i nie był jeszcze inicjalizowany
      particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 72,
            "limit": 200,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "edge",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 90
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 133.01962870896148,
            "color": "#ffffff",
            "opacity": 0.2078431698577523,
            "width": 1.6627453588620185
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 1579.6080909189175,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "window",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 119.64871138337844,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 117.944397641112,
              "duration": 2,
              "opacity": 0.362257792754844,
              "speed": 3
            },
            "repulse": {
              "distance": 63.81264607113517,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });

      // Oznaczamy, że particlesJS został zainicjalizowany
      particlesElement.setAttribute("data-particles-initialized", "true");
    }
  }

  // Sprawdzamy, czy element #particles-js już istnieje w DOM
  if (document.getElementById("particles-js")) {
    initParticlesJS(); // Jeżeli element istnieje, inicjalizujemy particlesJS
  }

  // Używamy MutationObserver do wykrywania nowych elementów z id #particles-js w DOM
  const observer = new MutationObserver(() => {
    if (document.getElementById("particles-js")) {
      initParticlesJS(); // Jeśli pojawi się nowy element #particles-js, inicjalizujemy particlesJS
    }
  });

  // Konfiguracja obserwatora
  observer.observe(document.body, {
    childList: true,  // Obserwujemy dodawanie nowych dzieci
    subtree: true     // Obserwujemy również dzieci wszystkich elementów
  });
})();
