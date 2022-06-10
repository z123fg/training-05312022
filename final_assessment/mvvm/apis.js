class APIs {
    static BASE_URL = "http://localhost:3000/";

    static ADD_SUB_URL = "todos";
    static Add(data) {
        let url = this.BASE_URL + this.ADD_SUB_URL;
        let body = JSON.stringify(data);
        let headers = {
            'Content-Type': 'application/json'
        }
        return fetch(
            url,
            {
                method: "POST",
                body: body,
                headers: headers
            }
        ).then((res) => {
            return res.json();
        });
    }

    static DELETE_SUB_URL = "todos/";
    static Delete(id) {
        let url = this.BASE_URL + this.DELETE_SUB_URL + id;
        return fetch(
            url,
            {
                method: "DELETE"
            }
        ).then((res) => {
            return res.json();
        })
    }

    static GET_SUB_URL = "todos";
    static Get() {
        let url = this.BASE_URL + this.GET_SUB_URL;
        return fetch(
            url,
            {
                method: "GET"
            }
        ).then((res) => {
            return res.json();
        })
    }

    static UPDATE_SUB_URL = "todos/";
    static Update(id, data) {
        let url = this.BASE_URL + this.UPDATE_SUB_URL + id;
        let body = JSON.stringify(data);
        let headers = {
            'Content-Type': 'application/json'
        }
        return fetch(
            url,
            {
                method: "PATCH",
                body: body,
                headers: headers
            }
        ).then((res) => {
            return res.json();
        });
    }
}