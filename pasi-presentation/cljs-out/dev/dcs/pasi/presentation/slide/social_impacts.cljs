(ns dcs.pasi.presentation.slide.social-impacts)

(def colour-social "#4C86A8")
(def colour-economic "#EB5160")
(def colour-environmental "#72B01D")

(def slide
 [:section
  
  [:section {:data-auto-animate       "data-auto-animate"
             :data-auto-animate-id    "social-impacts"
             :data-background-color   "black"
             :data-background-image   "https://upload.wikimedia.org/wikipedia/commons/b/b8/Reuse._Recycle.jpg"
             :data-background-opacity 0.6}
   [:aside.notes [:small [:ul
                          [:li "Data about social impacts - what exactly...?"]]]]
   [:h3 {:data-auto-animate-id "social-impacts"
         :style                "color: white"}
    "Social impacts"]
   ]

  
  [:section {:data-auto-animate    "data-auto-animate"
             :data-auto-animate-id "social-impacts"}
   [:aside.notes [:small [:ul
                          [:li 
                           "3 types: "
                           [:span {:style (str "color: " colour-social)} "social"] ", "
                           [:span {:style (str "color: " colour-economic)} "economic"] ", "
                           [:span {:style (str "color: " colour-environmental)} "environmental"]]
                          [:li "Both quantitatives & qualitatives"
                           [:ul [:li "...tractable, can be reasoned about"]]]
                          [:li "For example:"]
                          [:li "Counts of: households helped, new jobs, volunteering roles, training positions"]
                          [:li "Kgs: diverted from landfill, recycled"]
                          [:li "£: saved in collection costs, disposal costs, for meeting targets"]
                          [:li "Descriptive evidence of: behaviour changes, env impact, social cohesivness"
                           [:ul [:li "    using, say, composable code-list values"]]]
                          [:li [:span {:style (str "color: " colour-environmental)} "Focus for PoC is on " [:b "waste reduction"] " with others to follow"]]]]]
   [:h3 "Social impacts"]
   
   [:div.fragment.semi-fade-out.shrink {:data-fragment-index 9}
    [:p.fragment.fade-up {:data-fragment-index 1
                          :style               (str "color: " colour-social)} "Improved community cohesion"]
    [:p.fragment.fade-up {:data-fragment-index 2
                          :style               (str "color: " colour-social)} "Increased physical, mental well being"]
    
    [:p.fragment.fade-up {:data-fragment-index 3
                          :style               (str "color: " colour-economic)} "Lower cost goods"]
    [:p.fragment.fade-up {:data-fragment-index 4
                          :style               (str "color: " colour-economic)} "Better local availablity (avoiding transport costs)"]
    [:p.fragment.fade-up {:data-fragment-index 5
                          :style               (str "color: " colour-economic)} "More local employment, skill/learning opportunities"]

    [:p.fragment.fade-up {:data-fragment-index 6
                          :style               (str "color: " colour-environmental)} "Contributions towards council targets"]
    [:p.fragment.fade-up {:data-fragment-index 7
                          :style               (str "color: " colour-environmental)} "Increased waste-awareness/participation in reduction"]]
   [:div.fragment.grow.highlight-green {:data-fragment-index 9}
    [:p.fragment.fade-up {:data-fragment-index 8
                          :style               (str "color: " colour-environmental)} "Reduced waste, landfill & pollution"]]
   ]
  ])


