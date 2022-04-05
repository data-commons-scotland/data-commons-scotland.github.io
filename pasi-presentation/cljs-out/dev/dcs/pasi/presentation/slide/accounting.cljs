(ns dcs.pasi.presentation.slide.accounting)

(def colour-ace "#aeebf9")
(def colour-frshr "#f2e1ab")
(def colour-stcil "#ff9c00")
(def colour-stcmf "#94cc7a")
(def colour-zws "grey") 
(def colour-dcs "brown")

(def slide
  [:section
   
   [:section {:data-auto-animate       "data-auto-animate"
              :data-auto-animate-id    "accounting"
              :data-background-color   "black"
              :data-background-image   "https://upload.wikimedia.org/wikipedia/commons/6/61/Green_Numbers.jpg"
              :data-background-opacity 0.8}
    [:aside.notes [:small [:ul
                           [:li "'" [:em "Accounting"] "'?..."]
                           [:li "Raw measurements/observations"]
                           [:li "Reference metrics/categorisatios"]
                           [:li "Derivations/calculations"]]]]
    [:h3 {:data-auto-animate-id "participatory"
          :style                "color: white"}
     "Accounting"]]

   

   [:section {:data-auto-animate    "data-auto-animate"
              :data-auto-animate-id "accounting"}
    [:aside.notes [:small [:ul
                           [:li "Measurements of reuse/recycling supplied by our data partners..."]]]]
    [:h3 "Accounting"]
    [:p "Supply " [:b "measurement"] "/observational data (quantities, times, descriptions)"]
    [:div {:style "display: flex"}
     [:div {:style "flex: 1"}
      [:figure
       [:img {:src "https://github.com/data-commons-scotland/dcs-shorts/blob/master/carbon-savings/img/ace-raw-snippet.png?raw=true"}]
       [:figcaption [:small {:style (str "color: " colour-ace)} "Alloa Community Enterprises"]]]
      [:figure
       [:img {:src "https://github.com/data-commons-scotland/dcs-shorts/blob/master/carbon-savings/img/stirling-community-food-raw-snippet.png?raw=true"}]
       [:figcaption [:small {:style (str "color: " colour-stcmf)} "Stirling Comunity Food"]]]]
     [:div {:style "flex: 1"}
      [:figure
       [:img {:src "https://github.com/data-commons-scotland/dcs-shorts/blob/master/carbon-savings/img/stirling-council-raw-snippet.png?raw=true"}]
       [:figcaption [:small {:style (str "color: " colour-stcil)} "Stirling council"]]]
      [:figure
       [:img {:src "https://github.com/data-commons-scotland/dcs-shorts/blob/master/carbon-savings/img/the-fair-share-raw-snippet.png?raw=true"}]
       [:figcaption [:small {:style (str "color: " colour-frshr)} "The Fair Share"]]]]]]



   [:section {:data-auto-animate    "data-auto-animate"
              :data-auto-animate-id "accounting"}
    [:aside.notes [:small [:ul
                           [:li "A reference metric..."]]]]
    [:h3 "Accounting"]
    [:p "Provide " [:b "reference"] " metrics (measuring and categorisation standards)"]
    [:div {:style "display: flex; justify-content: center"}
     [:div {:style "flex: 0.5"}
      [:figure
       [:img {:src "https://github.com/data-commons-scotland/dcs-shorts/blob/master/carbon-savings/img/carbon-metric-table-6_2-snippet.png?raw=true"}]
       [:figcaption [:small {:style (str "color: " colour-zws)} "Zero Waste Scotland"]]]]]]
   

   [:section {:data-auto-animate    "data-auto-animate"
              :data-auto-animate-id "accounting"}
    [:aside.notes [:small [:ul
                           [:li "Source data → reference metric mappings"]
                           [:li "Calculations to standardised waste reduction data"]]]]
    [:h3 "Accounting"]
    [:p "Contribute " [:b "secondary"] " data (joining data, secondary calculations)"]
    [:div {:style "display: flex; justify-content: center"}
     [:div {:style "flex: 0.5"}
      [:figure
       [:img {:src "img/DcsAceToRefData-screenshot.png"}]
       [:figcaption [:small {:style (str "color: " colour-dcs)} "Data Commons Scotland"]]]]]]
   ])