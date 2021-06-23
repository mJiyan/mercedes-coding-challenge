import { VehicleList, VehicleDetails, ErrorPage } from '../views';

const routes = [
    { path: '/vehicles', component: VehicleList },
    { path: '/vehicles/:id', component: VehicleDetails },
    { path: '/error', component: ErrorPage },
]

export { routes }