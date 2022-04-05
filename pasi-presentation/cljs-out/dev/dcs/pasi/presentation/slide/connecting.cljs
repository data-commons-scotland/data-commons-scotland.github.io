(ns dcs.pasi.presentation.slide.connecting)

(def attribution "position: absolute; top: 0; left: 0; text-align: left; font-size: 0.3em; color: white")
(def shadowtitle "color: lightgrey; opacity: 0.1")

(def slide
  [:section
   
   [:section {:data-auto-animate       "data-auto-animate"
              :data-auto-animate-id    "connecting"
              :data-background-color   "black"
              :data-background-image   "https://upload.wikimedia.org/wikipedia/commons/8/8b/Social_Network_Visualization.png"
              :data-background-opacity 0.8
              :data-background-size    "contain"}
    [:span {:style attribution}
     "Image by Martin Grandjean" [:br] [:span {:style "color: white"} "CC BY 4.0"]]
    [:aside.notes [:small [:ul
                           [:li "Publish → " [:b "connect"] " → use"]]]]
    [:h3 {:data-auto-animate-id "connecting"
          :style                "color: white"}
     "Connecting"]]



   [:section {:data-auto-animate       "data-auto-animate"
              :data-auto-animate-id    "connecting"
              :data-background-image   "img/data-flow-PASI-PoC-1.png"
              :data-background-opacity 0.3
              :data-background-size    "contain"}
    [:aside.notes [:small [:ul
                           [:li "Each data supplier publishes an island of open data"]
                           [:li "Use common standards to allow us to " [:b "connect"] " those islands"]
                           [:ul
                            [:li "common semantics, vocabs, RDF"]
                            [:li "common protocols/data transports, SPARQL"]]
                           [:li "Create synergies, and surface knowledge"]]]]
    [:h3 {:style "color: black"} "Connecting"]
    [:p {:style "color: black"} "...it all together"]
    [:p {:style "color: black"} "and making it accessible"]]
   
   [:section {:data-auto-animate       "data-auto-animate"
              :data-auto-animate-id    "connecting"
              :data-background-image   "img/data-flow-PASI-PoC-1.png"
              :data-background-opacity 0.3
              :data-background-size    "contain"}
    [:aside.notes [:small [:ul
                           [:li "Our participating, real-world orgs won't want to change their data handling"]
                           [:li "PASI needs to provide non-intrusive means for them to publish their data/evidence their impacts " [:em "almost"] " 'as is'"]
                           [:li "And then convert it into standarised forms to allow global insights"]]]]
    [:h3 {:style "color: black"} "Connecting"]
    [:p {:style "color: black"} "private docs → public islands of RDF graphs"]
    [:p {:style "color: black"} "join-up using federated SPARQL → extract knowledge"]]

   

   [:section {:data-auto-animate       "data-auto-animate"
              :data-auto-animate-id    "connecting"
              :data-background-image   "img/data-flow-PASI-PoC-1.png"
              :data-background-opacity 0.3
              :data-background-size    "contain"}
    [:aside.notes [:small [:ul [:li "Let's trace some sample data through the PASI system to provide a flavour of how the data is connected"]]]]
    [:h3 {:style "color: black"} "Connecting"]
    [:p {:style "color: red"} "Let's trace some sample data" [:br] "through the PASI system"]]

   
   [:section {:data-auto-animate       "data-auto-animate"
              :data-auto-animate-id    "connecting"
              :data-background-image   "img/data-flow-PASI-PoC-2.png"
              :data-background-opacity 1
              :data-background-size    "contain"}
    [:aside.notes [:small [:ul 
                           [:li "Taking some sample data from Alloa Community Enterprises (ACE) furniture reuse store"]
                           [:li "ACE publich records of reused furniture into private, Excel spreadsheets"]
                           [:li "Wooden chair:  avg weight; and number reused in a accounting period"]]]]
    [:h3 {:style shadowtitle} "2"]]
   

   [:section {:data-auto-animate       "data-auto-animate"
              :data-auto-animate-id    "connecting"
              :data-background-image   "img/data-flow-PASI-PoC-3.png"
              :data-background-opacity 1
              :data-background-size    "contain"}
    [:aside.notes [:small [:ul
                           [:li "A PASI tool publishes data about each (sub)category of reused furniture"]
                           [:li "Essentially its avg weight"]
                           [:li "As publically accessible, RDF data graph"]]]]
    [:h3 {:style shadowtitle} "3"]]
   
   
   [:section {:data-auto-animate       "data-auto-animate"
              :data-auto-animate-id    "connecting"
              :data-background-image   "img/data-flow-PASI-PoC-4.png"
              :data-background-opacity 1
              :data-background-size    "contain"}
    [:aside.notes [:small [:ul
                           [:li "The PASI tool also publishes data about each reuse instance"]
                           [:li "Essentially the categories, numbers and dates of items reused"]]]]
    [:h3 {:style shadowtitle} "4"]]
   
   
   [:section {:data-auto-animate       "data-auto-animate"
              :data-auto-animate-id    "connecting"
              :data-background-image   "img/data-flow-PASI-PoC-5.png"
              :data-background-opacity 1
              :data-background-size    "contain"}
    [:aside.notes [:small [:ul
                           [:li "Zero Waste Scotland (ZWS) publish a PDF doc ('The Scottish Carbon Metric') "]
                           [:li "which contains information that can be used a reference metric..."]
                           [:li "...as a common basis for measuring waste reduction"]]]]
    [:h3 {:style shadowtitle} "5"]]
   
   
   [:section {:data-auto-animate       "data-auto-animate"
              :data-auto-animate-id    "connecting"
              :data-background-image   "img/data-flow-PASI-PoC-6.png"
              :data-background-opacity 1
              :data-background-size    "contain"}
    [:aside.notes [:small [:ul
                           [:li "PASI extracts and publishes the pertinent from the PDF"]
                           [:li "...into a more tractable and publically accessible, RDF data graph"]]]]
    [:h3 {:style shadowtitle} "6"]]
   
   
   [:section {:data-auto-animate       "data-auto-animate"
              :data-auto-animate-id    "connecting"
              :data-background-image   "img/data-flow-PASI-PoC-7.png"
              :data-background-opacity 1
              :data-background-size    "contain"}
    [:aside.notes [:small [:ul
                           [:li "In this PoC scenario, we (Data Commons Scotland) are also a participant/data contributor"]
                           [:li "We publish an RDF graph which describes how to"]
                           [:li "map ACE furniture (sub)categories fractionally onto the Carbon Metric"]
                           [:li "Wooden chair → reusing 1.0 Wood ⇒ X amount of carbin-dioxide-equivalent"]]]]
    [:h3 {:style shadowtitle} "7"]]
   
   
   [:section {:data-auto-animate       "data-auto-animate"
              :data-auto-animate-id    "connecting"
              :data-background-image   "img/data-flow-PASI-PoC-8.png"
              :data-background-opacity 1
              :data-background-size    "contain"}
    [:aside.notes [:small [:ul
                           [:li "The resulting standarised waste reduction calculations..."]
                           [:li "can be accessed via the GraphQL protocol - as used by many apps"]]]]
    [:h3 {:style shadowtitle} "8"]]
   

   [:section {:data-auto-animate       "data-auto-animate"
              :data-auto-animate-id    "connecting"
              :data-background-image   "img/data-flow-PASI-PoC-9.png"
              :data-background-opacity 1
              :data-background-size    "contain"}
    [:aside.notes [:small [:ul
                           [:li "The resulting standarised waste reduction calculations..."]
                           [:li "can be accessed via the SPARQL protocol - as used in the world of data analysis"]]]]
    [:h3 {:style shadowtitle} "9"]]

   ])