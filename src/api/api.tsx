const API_BASE_URL: string = process.env.API_BASE_URL as string

export const fetchUpdatePassword = async (
    userId: string,
    oldPassword: string,
    newPassword: string,
): Promise<boolean> => {
    const UPDATE_PASS_ENDPOINT: string = '/update-pass'

    try {
        const response = await fetch(
            `${API_BASE_URL}${UPDATE_PASS_ENDPOINT}/${userId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contrasena_actual: oldPassword,
                    nueva_contrasena: newPassword,
                }),
            },
        )

        if (!response.ok) {
            throw new Error(
                `Error al actualizar la contraseña: ${response.status}`,
            )
        }

        console.log('Contraseña actualizada correctamente')
        return true
    } catch (error: any) {
        console.error('Error de red:', error.message)
        throw error
    }
}

export const fetchLoginUser = async (
    email: string,
    password: string,
): Promise<any> => {
    const LOGIN_ENDPOINT: string = '/auth/userLogin'

    try {
        const response = await fetch(`${API_BASE_URL}${LOGIN_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })

        if (!response.ok) {
            throw new Error(`Error al iniciar sesion: ${response.status}`)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al iniciar sesion:', error)
        throw error
    }
}

////////////INCOMES////////////////////

export const createIncome = async (
    email: string,
    comentarios: string,
    categoria: string,
    subCategoria: string,
    monto: number,
    divisa: string,
    fechaPago: Date,
    repetir: string,
): Promise<any> => {
    const LOGIN_ENDPOINT: string = '/income/createIncome'

    try {
        const response = await fetch(`${API_BASE_URL}${LOGIN_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                comentarios,
                categoria,
                subCategoria,
                monto,
                divisa,
                fechaPago,
                repetir,
            }),
        })

        if (!response.ok) {
            throw new Error(`Error al registrar ingreso: ${response.status}`)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al registrar ingreso:', error)
        throw error
    }
}

export const fetchIncomes = async (email: string): Promise<any> => {
    const PAYMENTS_ENDPOINT: string = `/income/fetchIncomes?email=${encodeURIComponent(email)}`

    try {
        const response = await fetch(`${API_BASE_URL}${PAYMENTS_ENDPOINT}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            throw new Error(`Error al obtener los ingresos: ${response.status}`)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al obtener los ingresos:', error)
        throw error
    }
}

////////////EXPENSES////////////////////

export const createExpense = async (
    email: string,
    comentarios: string,
    categoria: string,
    subCategoria: string,
    monto: number,
    divisa: string,
    fechaPago: Date,
    cuotas: number,
    repetir: string,
    dividir: boolean,
    condDiv: string,
    montoDiv: number,
): Promise<any> => {
    const LOGIN_ENDPOINT: string = '/expense/createExpense'

    try {
        const response = await fetch(`${API_BASE_URL}${LOGIN_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                comentarios,
                categoria,
                subCategoria,
                monto,
                divisa,
                fechaPago,
                cuotas,
                repetir,
                dividir,
                condDiv,
                montoDiv,
            }),
        })

        if (!response.ok) {
            throw new Error(`Error al registrar ingreso: ${response.status}`)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al registrar ingreso:', error)
        throw error
    }
}

export const fetchExpenses = async (email: string): Promise<any> => {
    const PAYMENTS_ENDPOINT: string = `/expense/fetchExpenses?email=${encodeURIComponent(email)}`

    try {
        const response = await fetch(`${API_BASE_URL}${PAYMENTS_ENDPOINT}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            throw new Error(`Error al obtener los egresos: ${response.status}`)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al obtener los egresos:', error)
        throw error
    }
}

export const fetchExpenseByID = async (
    email: string,
    expenseId: string,
): Promise<any> => {
    const FETCH_EXPENSE_BY_ID_ENDPOINT: string = `/expense/fetchExpenseByID`

    try {
        const response = await fetch(
            `${API_BASE_URL}${FETCH_EXPENSE_BY_ID_ENDPOINT}?email=${email}&expenseId=${expenseId}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        )

        if (!response.ok) {
            throw new Error(`Error al obtener el gasto: ${response.status}`)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al obtener el gasto:', error)
        throw error
    }
}

export const editExpense = async (
    email: string,
    expenseId: string,
    categoria: string,
    subCategoria: string,
    comentarios: string,
    monto: number,
    divisa: string,
    fechaPago: Date,
    cuotas: number,
    repetir: string,
    dividir: boolean,
    condDiv: string,
    montoDiv: number,
): Promise<any> => {
    const EDIT_EXPENSE_ENDPOINT: string = `/expense/editExpense`

    try {
        const response = await fetch(
            `${API_BASE_URL}${EDIT_EXPENSE_ENDPOINT}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    expenseId,
                    updatedExpense: {
                        comentarios,
                        categoria,
                        subCategoria,
                        monto,
                        divisa,
                        fechaPago,
                        cuotas,
                        repetir,
                        dividir,
                        condDiv,
                        montoDiv,
                    },
                }),
            },
        )

        if (!response.ok) {
            throw new Error(`Error al actualizar el gasto: ${response.status}`)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al actualizar el gasto:', error)
        throw error
    }
}

export const deleteExpense = async (
    email: string,
    expenseId: string,
): Promise<boolean> => {
    const DELETE_EXPENSE_ENDPOINT: string = `/expense/deleteExpense`

    try {
        const response = await fetch(
            `${API_BASE_URL}${DELETE_EXPENSE_ENDPOINT}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, expenseId }),
            },
        )

        if (!response.ok) {
            throw new Error(`Error al borrar el gasto: ${response.status}`)
        }

        console.log('Gasto borrado correctamente')
        return true
    } catch (error) {
        console.error('Error al borrar el gasto:', error)
        throw error
    }
}

////////////BUDGETS////////////////////

export const createBudget = async (
    email: string,
    comentarios: string,
    categoria: string,
    subCategoria: string,
    monto: number,
    porcentaje: number,
    divisa: string,
    fechaPago: Date,
    repetir: string,
): Promise<any> => {
    const LOGIN_ENDPOINT: string = '/budget/createBudget'

    try {
        const response = await fetch(`${API_BASE_URL}${LOGIN_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                comentarios,
                categoria,
                subCategoria,
                monto,
                porcentaje,
                divisa,
                fechaPago,
                repetir,
            }),
        })

        if (!response.ok) {
            throw new Error(`Error al registrar ingreso: ${response.status}`)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al registrar ingreso:', error)
        throw error
    }
}

export const fetchBudgets = async (email: string): Promise<any> => {
    const PAYMENTS_ENDPOINT: string = `/budget/fetchBudgets?email=${encodeURIComponent(email)}`

    try {
        const response = await fetch(`${API_BASE_URL}${PAYMENTS_ENDPOINT}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            throw new Error(`Error al obtener los egresos: ${response.status}`)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al obtener los egresos:', error)
        throw error
    }
}

////////////CATEGORIES////////////////////

export const fetchCategorias = async (): Promise<any> => {
    const PAYMENTS_ENDPOINT: string = `/categoria/fetchCategorias`

    try {
        const response = await fetch(`${API_BASE_URL}${PAYMENTS_ENDPOINT}`, {
            method: 'GET',
            headers: {},
        })

        if (!response.ok) {
            throw new Error(
                `Error al obtener las categorías: ${response.status}`,
            )
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al obtener las categorías:', error)
        throw error
    }
}

export const fetchSubCategorias = async (categoriaId: string): Promise<any> => {
    const PAYMENTS_ENDPOINT: string = `/categoria/fetchSubCategorias`

    try {
        const response = await fetch(`${API_BASE_URL}${PAYMENTS_ENDPOINT}`, {
            method: 'GET',
            headers: {
                categoriaId: categoriaId,
            },
        })

        if (!response.ok) {
            throw new Error(
                `Error al obtener las subcategorías: ${response.status}`,
            )
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error al obtener las subcategorías:', error)
        throw error
    }
}
