(ns dcs.pasi.presentation.slide.lastly)

(def slide
  [:section
   
   [:section {:data-auto-animate       "data-auto-animate"
              :data-auto-animate-id    "lastly"
              :data-background-color   "black"
              :data-background-image   "img/tools-background.png"
              :data-background-opacity 0.4
              :data-background-size    "contain"}
    [:h3 {:data-auto-animate-id "software"
          :style                "color: white"}
     "Lastly"]
    
    [:small {:style "color: white"}
     [:p.fragment.fade-in {:data-fragment-index 1} 
      "Thank you to "
      [:span {:style "color: yellow"} "the Open Data community in Scotland"] ", " [:br]
      "our case-study data partners "
      [:span {:style "color: yellow"} "Alloa Community Enterprises"] ", " [:br]
      [:span {:style "color: yellow"} "Stirling Community Food"] ", "
      [:span {:style "color: yellow"} "Stirling council"] " & "
      [:span {:style "color: yellow"} "The Fair Share"] ", " [:br]
      "our funder " [:span {:style "color: yellow"} "EPSRC"]]
     
     [:p.fragment.fade-in {:data-fragment-index 2}
      "See our blog " [:span {:style "color: green"} [:a {:href "https://campuspress.stir.ac.uk/datacommonsscotland/"} "https://campuspress.stir.ac.uk/datacommonsscotland/"]] [:br]
      "waste Open Data app " [:span {:style "color: green"} [:a {:href "https://wastemattersscotland.org"} "https://wastemattersscotland.org"]] [:br]
      "Git repositories " [:span {:style "color: green"} [:a {:href "https://github.com/data-commons-scotland"} "https://github.com/data-commons-scotland"]] 
      ]]
    ]
   
   ])
