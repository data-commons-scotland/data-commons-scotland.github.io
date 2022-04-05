(ns dcs.pasi.presentation.slide.last)

(def slide
  [:section
   
   [:section {:data-auto-animate "data-auto-animate"
              :data-auto-animate-id "software"
              :data-background-color "black"
              :data-background-image   "img/tools-background.png"
              :data-background-opacity 0.4
              :data-background-size "contain"}
    [:aside.notes [:small [:ul
                           [:li "accounting"]
                           [:li "TODO"]
                           [:li "TODO"]]]]
    [:h3 {:data-auto-animate-id "software"
          :style "color: white"}
     "Software"]]
   
   [:section
    [:h3 "Links"]
    [:p "TODO: "
     [:a {:href "todo"} "software, thanks and links"]]]
   
   ])
