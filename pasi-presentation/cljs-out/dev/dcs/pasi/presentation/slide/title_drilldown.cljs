(ns dcs.pasi.presentation.slide.title-drilldown)

(def colour-participatory "#72B01D")
(def colour-accounting "#4C86A8")
(def colour-social-impacts "#EB5160")

(def slide
  [:section
   

   [:section {:data-auto-animate    "data-auto-animate"
              :data-auto-animate-id "title"}
    [:aside.notes [:small [:ul 
                           [:li "How does this piece of work fit within the context of our project?..."]]]]
    [:h3 "The Participatory Accounting" [:br] "of Social Impacts"]
    [:p "It brings together three aspects of our work..." [:br]
     [:small [:ol.fragment.fade-up {:data-fragment-index 0}
              [:li "Our area of research:" [:b {:style "font-size: larger"} " making data accessible/open to all"]]
              [:li "Our choosen case study:" [:b {:style "font-size: larger"} " data about waste in Scotland"]]
              [:li "Our interest in " [:b {:style "font-size: larger"} " promoting less published/3" [:sup "rd"] " Sector data"]]]]]]
   
   
   [:section {:data-auto-animate    "data-auto-animate"
              :data-auto-animate-id "title"}
    [:aside.notes [:small [:ul
                           [:li "Drill-down into this title..."]
                           [:li {:style (str "color: " colour-participatory)} "Public? ...some cons to solve"]
                           [:li {:style (str "color: " colour-accounting)} "Observations/measurements, related knowledge"]
                           [:li {:style (str "color: " colour-accounting)} "Useful/tractible, doesn't have to be numbers"]
                           [:li {:style (str "color: " colour-social-impacts)} "Open Data, gov+councils publish already"]
                           [:li {:style (str "color: " colour-social-impacts)} "But few 3rd Sector Orgs report their outcomes"]]]]

    [:h3 
     [:span {:style "color: grey"} "The "]
     [:span {:style (str "color: " colour-participatory)} "Participatory "] 
     [:span {:style (str "color: " colour-accounting)} "Accounting"] [:br] 
     [:span {:style "color: grey"} "of "] 
     [:span {:style (str "color: " colour-social-impacts)} "Social Impacts"]]
    [:p 
     [:span.fragment.fade-up {:data-fragment-index 1
                              :style               (str "color: " colour-participatory)} "Participatory"]
     [:span.fragment.fade-left {:data-fragment-index 2}
      " ⇒ 🌍 " [:em "anyone"] " can contribute (potentially)"]
     ]
    [:p
     [:span.fragment.fade-up {:data-fragment-index 1
                              :style               (str "color: " colour-accounting)} "Accounting"]
     [:span.fragment.fade-left {:data-fragment-index 3}
      " ⇒ 📰 make public the " [:em "evidence-backed data"]]
     ]
    [:p
     [:span.fragment.fade-up {:data-fragment-index 1
                              :style               (str "color: " colour-social-impacts)} "Social impacts"]
     [:span.fragment.fade-left {:data-fragment-index 4}
      " ⇒ ✨ " [:em "Third Sector"] " (less published) data"]
     ]
    ]
   ] 
  )