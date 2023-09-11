function FindProxyForURL(url, host) {
  return "SOCKS5 127.0.0.1:7890; SOCKS5 127.0.0.1:10809; SOCKS5 127.0.0.1:1080;DIRECT;"
}
