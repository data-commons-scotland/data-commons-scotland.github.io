(ns dcs.pasi.presentation.slide.participatory)

(def colour-redish "#D14081")
(def colour-blueish "#1B5299")

(def slide
  [:section
   
   [:section {:data-auto-animate       "data-auto-animate"
              :data-auto-animate-id    "participatory"
              :data-background-color   "black"
              :data-background-image   "https://upload.wikimedia.org/wikipedia/commons/e/e4/Pure_Lambda_-_Build_Your_Makers_Team.png"
              :data-background-opacity 0.6}
    [:aside.notes [:small [:ul
                           [:li "We've used the term " [:em "participatory"]]
                           [:li "What do we mean?..."]]]]
    [:h3 {:data-auto-animate-id "participatory"
          :style                "color: white"}
     "Participatory"]]
   

   [:section {:data-auto-animate    "data-auto-animate"
              :data-auto-animate-id "participatory"}
    [:aside.notes [:small [:ul
                           [:li "Anyone can contribute (potentially)"]
                           [:li "Play different roles"]]]]
    [:h3 "Participatory"]
    [:p "Potentially any individual/organisaton can be a " [:em "participant"] " in the PASI information system"]
    [:p.fragment.fade-up  "A participant might" [:br]
     [:i.fa.fa-upload {:style (str "color: " colour-redish)}] " publish data into PASI’s open data graph" [:br]
     "or/and" [:br]
     [:i.fa.fa-download {:style (str "color: " colour-blueish)}] " consume data from it"]
    ]


   [:section {:data-auto-animate    "data-auto-animate"
              :data-auto-animate-id "participatory"}
    [:aside.notes [:small [:ul
                           [:li "Let's drill into the supplier/publisher roles..."]]]]
    [:h3 "Participatory"]
    [:p.fragment.fade-left [:i.fa.fa-upload {:style (str "color: " colour-redish)}] " Supply " [:b {:style (str "color: " colour-redish)} "measurement"] "/observational data (quantities, times, descriptions)"]
    [:p.fragment.fade-left [:i.fa.fa-upload {:style (str "color: " colour-redish)}] " Provide " [:b {:style (str "color: " colour-redish)} "reference"] " metrics (measuring and categorisation standards)"]
    [:p.fragment.fade-left [:i.fa.fa-upload {:style (str "color: " colour-redish)}] " Contribute " [:b {:style (str "color: " colour-redish)} "secondary"] " data (joining data, downstream calculations)"]
    ]


   [:section {:data-auto-animate    "data-auto-animate"
              :data-auto-animate-id "participatory"}
    [:aside.notes [:small [:ul
                           [:li "Let's have a look at the consumer/data user roles..."]]]]
    [:h3 "Participatory"]
    [:p.fragment.fade-left [:i.fa.fa-download {:style (str "color: " colour-blueish)}] " Consume the data via customised " [:b {:style (str "color: " colour-blueish)} "apps"]]
    [:p.fragment.fade-left [:i.fa.fa-download {:style (str "color: " colour-blueish)}] " Query the data directly using " [:b {:style (str "color: " colour-blueish)} "SPARQL"] " or " [:b {:style (str "color: " colour-blueish)} "GraphQL"] " tools"]]


   [:section {:data-auto-animate    "data-auto-animate"
              :data-auto-animate-id "participatory"}
    [:aside.notes [:small [:ul
                           [:li "Public contributions?"]
                           [:li "Yes, in general"]
                           [:li "Make it easy - 'click and submit'"]
                           [:li "Avoid double accounting of waste reduction"]
                           [:ul [:li "...could ID material and time periods - but difficult"]]
                           [:li "Other considerations..."]
                           [:ul [:li "rewriting history, audit trails, tracing provenance"]]
                           [:li "...tech absolutely can help with this"]]]]
    [:h3 "Participatory"]

    [:div {:style "display: flex"}
     [:div {:style "flex: 0.4"}
      [:figure
       [:figcaption [:small "Public contributions?"]]
       [:img {:src "https://upload.wikimedia.org/wikipedia/commons/4/42/Public_Opinion_--_April_22%2C_1874_%284359955260%29.jpg"}]
       ]]
     [:div.fragment {:style "flex: 0.6; align-self: center"}
      [:small [:ul
               [:li "...Yes (potentially)"]
               [:li "Make it as easy as Tweeting " [:i.fab.fa-twitter]]
               [:li "More data → more knowledge 😀"]
               [:li "Inform → Consult → Involve → Collaborate → 💪"]
               [:li "Updates? Accuracy? (Avoid x2 accounting) Trust? 🤔"]]]]]]
   ])
