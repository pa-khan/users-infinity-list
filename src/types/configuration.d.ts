declare module configuration {
    type Palette = [string, string, string, string, string]
    interface Ui {
        font: string
        size: number
        colors: Palette
    }
}