(ns dcs.pasi.presentation.slide.accessing)

(def attribution "position: absolute; top: 0; left: 0; text-align: left; font-size: 0.3em; color: white")

(def slide
  [:section
   
   
   [:section {:data-auto-animate       "data-auto-animate"
              :data-auto-animate-id    "accessing"
              :data-background-color   "black"
              :data-background-image   "https://upload.wikimedia.org/wikipedia/commons/8/8e/Free_data.jpg"
              :data-background-opacity 0.3}
    [:span {:style attribution}
     "Image by Alessandro Samuel-Rosa" [:br] [:span {:style "color: grey"} "CC BY 4.0"]]
    [:aside.notes [:small [:ul
                           [:li "For our proof-of-concept, we've prototyped 2 access scenarios..."]]]] 
    [:h3 {:data-auto-animate-id "title"
          :style                "color: white"}
     "Accessing"]]
   
   
   
   [:section {:data-auto-animate       "data-auto-animate"
              :data-auto-animate-id    "accessing"
              :data-background-color   "black"
              :data-background-image   "https://upload.wikimedia.org/wikipedia/commons/8/8e/Free_data.jpg"
              :data-background-opacity 0.3}
    
    [:aside.notes [:small [:ul
                           [:li "E.g. a webapp which provides a dashboard onto waste reduction, for the general public"]
                           [:li "E.g. a federated SPARQL query constructed by a data analyst"]]]]
    [:h3 {:style "color: white"} "Accessing"]

    [:div {:style "display: flex; color: white"}
     [:div {:style "flex: 1"}
      [:figure
       [:figcaption [:small  "Through " [:b "apps"] " which consume the data from the PASI information system"]]
       [:img {:src "img/pasi-dashboard-app-annotated.mp4"}]]]
     [:div {:style "flex: 1"}
      [:figure
       [:figcaption [:small  "Or, perform direct " [:b "SPARQL"] " queries over its data"]]
       [:img {:src #_"/img/StcilKerbsideRecycling-SPARQL-screenshot.png"
              "img/pasi-sparql-demo-vid.mp4"}]
       ]]]]
   

   ])