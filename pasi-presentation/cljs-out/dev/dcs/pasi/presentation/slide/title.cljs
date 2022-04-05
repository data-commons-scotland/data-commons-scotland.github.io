(ns dcs.pasi.presentation.slide.title)

(def attribution "position: absolute; top: 0; left: 0; text-align: left; font-size: 0.3em; color: white")
 
(def slide
  [:section {:data-auto-animate       "data-auto-animate"
             :data-auto-animate-id    "title"
             :data-background-color   "black"
             :data-background-image   "https://upload.wikimedia.org/wikipedia/commons/4/48/Social_Good_Summit_2019.jpg"
             :data-background-opacity 0.6
             }
   [:span {:style attribution} 
    [:em "Social Good Summit 2019"] [:br] "Image by Stuart Ramson for United Nations Foundation" [:br] [:span {:style "color: grey"} "CC BY 4.0"]]
   [:img {:src   "img/pasi-logo.png"
          :width 200}]
   [:h3 
    {:data-auto-animate-id "title"
     :style "color: white"} 
    "The Participatory Accounting" [:br] "of Social Impacts"]
   [:p 
    [:small 
     [:span {:style "color: white"} "By the "
        [:a {:href "https://campuspress.stir.ac.uk/datacommonsscotland"} "Data Commons Scotland"]
        " project"]
     [:br]
     "Spring 2022"]]
   [:aside.notes
    [:small
     [:ul 
      [:li "Hello. I'm a member of the Data Commons Scotland research team."]
      [:li "I'm going to tell you about a project that we've been working on."]
      [:li "It is called: The Participatory Accounting of Social Impacts."]]]]])  