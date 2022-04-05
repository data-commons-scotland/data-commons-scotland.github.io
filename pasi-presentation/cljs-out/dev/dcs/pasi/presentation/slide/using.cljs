(ns dcs.pasi.presentation.slide.using)

(def orgs
  ["Alloa Community Enterprises"
   "The Fair Share"
   "Stirling council"
   "Stirling Community Food"])

(def colour-ace "#aeebf9")
(def colour-frshr "#f2e1ab")
(def colour-stcil "#ff9c00")
(def colour-stcmf "#94cc7a")
(def colour-zws "grey")
(def colour-dcs "brown")

(def colour-redish "#D14081")
(def colour-blueish "#1B5299")

(def attribution "position: absolute; top: 0; left: 0; text-align: left; font-size: 0.3em; color: white")


(def slide
  [:section
   

;; --- TODO ...

[:section {:data-auto-animate "data-auto-animate"
           :data-auto-animate-id "using"}
 [:aside.notes [:small [:ul
                        [:li "E.g. a webapp which provides a dashboard onto waste reduction, for the general public"]
                        [:li "E.g. a federated SPARQL query constructed by a data analyst"]]]]
 [:h3 "Using"]

 [:p "Build " [:b "apps"] " which consume the data from the PASI information system"
  [:br]
  " Or, perform direct queries over its data"]

 [:div {:style "display: flex"}
  [:div {:style "flex: 1"}
   [:figure
    [:img {:src "/img/pasi-app-screenshot.png"}]
    [:figcaption [:small {:style (str "color: " colour-dcs)} "An proof-of-concept app"]]]]
  [:div {:style "flex: 1"}
   [:figure
    [:img {:src #_"/img/StcilKerbsideRecycling-SPARQL-screenshot.png" "/img/pasi-sparql-demo-vid.mp4"}]
    [:figcaption [:small {:style (str "color: " colour-dcs)} "An example of direct use"]]]]]]

  ])