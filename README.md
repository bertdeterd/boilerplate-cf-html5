# my-app-normal

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

- name: myvsapp-connectivity-srv
  type: org.cloudfoundry.managed-service
  parameters:
    service: connectivity
    service-name: myvsapp-connectivity-srv
    service-plan: lite    
