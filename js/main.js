import {Route666} from "./router.js"

const rota = new Route666()
rota.adicionaRotas("/", "/pages/home.html")
rota.adicionaRotas("/universe", "/pages/universe.html")
rota.adicionaRotas("/exploration", "/pages/exploration.html")
rota.adicionaRotas(404, "/pages/404.html")


rota.manipule()

window.onpopstate = () => rota.manipule()
window.route = () => rota.funcaoRota()