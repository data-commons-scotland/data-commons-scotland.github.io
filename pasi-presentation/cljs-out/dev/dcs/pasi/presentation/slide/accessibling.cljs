(ns dcs.pasi.presentation.slide.accessibling)

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
   
[:section {:data-auto-animate "data-auto-animate"
           :data-auto-animate-id "connecting"
           :data-background-color "black"
           :data-background-image   "https://upload.wikimedia.org/wikipedia/commons/8/8b/Social_Network_Visualization.png"
           :data-background-opacity 0.8}
  [:span {:style attribution}
   "by Martin Grandjean" [:br] [:span {:style "color: white"} "CC BY 4.0"]]
 [:aside.notes [:small [:ul
                        [:li "each supplier publishes an island of open data"]
                        [:li "common standards allow us to connect those island"]
                        [:li "create synergies"]]]]
 [:h3 {:data-auto-animate-id "connecting"
       :style "color: white"}
  "Connecting"]]
   


;; ----- to be properly incorporated... all after this ----




[:section {:data-auto-animate "data-auto-animate"
           :data-auto-animate-id "connecting"
                ;:data-background-color "black"
           :data-background-image   "/img/data-flow-PASI-PoC.png"
           :data-background-opacity 0.3}
 [:aside.notes [:small [:ul
                        [:li "distributed but..."]
                        [:li "use open data tech to..."]
                        [:li "join it up and make it accessible"]
                        [:li "provides knowledge and can be built upon"]]]]
 [:h3 {:style "color: black"} "Connecting"]
 [:p {:style "color: black"} "it all together"]
 [:p {:style "color: black"} "and making it accessible"]]


[:section {:data-auto-animate "data-auto-animate"
           :data-auto-animate-id "connecting"
                ;:data-background-color "black"
           :data-background-image   "/img/data-flow-PASI-PoC.png"
           :data-background-opacity 1}
 [:aside.notes [:small [:ul
                        [:li "comes together"]]]]]

;; --- really in the next slide ...

[:section {:data-auto-animate "data-auto-animate"
           :data-auto-animate-id "accessing"}
 [:aside.notes [:small [:ul
                        [:li "E.g. a webapp which provides a dashboard onto waste reduction, for the general public"]
                        [:li "E.g. a federated SPARQL query constructed by a data analyst"]]]]
 [:h3 "Accessing"]

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