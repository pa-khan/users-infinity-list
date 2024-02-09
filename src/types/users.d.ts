declare module users {
    interface User {
        id: Id
        name: Name
        picture: Picture
        email: string
        gender?: string
        location?: Location
        login?: Login
        dob?: Dob
        registered?: Registered
        phone?: string
        cell?: string
        nat?: string
    }

    interface Name {
        title: string
        first: string
        last: string
    }

    interface LocationStreet {
        number: number
        name: string
    }

    interface LocationCoordinates {
        latitude: string
        longitude: string
    }

    interface LocationTimezone {
        offset: string
        description: string
    }

    interface Location {
        street: LocationStreet
        city: string
        state: string
        country: string
        postcode: string
        coordinates: LocationCoordinates
        timezone: LocationTimezone
    }

    interface Login {
        uuid: string
        username: string
        password: string
        salt: string
        md5: string
        sha1: string
        sha256: string
    }

    interface Dob {
        date: string
        age: number
    }

    interface Registered {
        date: string
        age: number
    }

    interface Id {
        name: string
        value: string
    }

    interface Picture {
        large: string
        medium: string
        thumbnail: string
    }
}