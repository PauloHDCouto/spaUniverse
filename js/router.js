export class Route666 {
  rotas = {}

  adicionaRotas(endpoint, pagina) {
    this.rotas[endpoint] = pagina
  }

  funcaoRota(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  manipule() {
    const { pathname } = window.location // esta pegando somente o pathname. POr isso referenciamos com o {pathname}ao inves de FAZER A NOTAÇÃO PONTO NO FIM
    const linksdasrotas = this.rotas[pathname] || this.rotas[404] // entra no primeiro se for verdadeiro, se nao entra no segundo

    fetch(linksdasrotas).then(data => data.text()).then(html => {document.querySelector("#app").innerHTML = html})

  }
}

