const CompanyProfileController = require("./CompanyProfileController")
// @ponicode
describe("CompanyProfileController.index", () => {
    test("0", async () => {
        await CompanyProfileController.index({ headers: { authorization: "oAuthToken" } }, { json: () => "\"[3,\"false\",false]\"" })
    })

    test("1", async () => {
        await CompanyProfileController.index({ headers: { authorization: "oAuthToken" } }, { json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" })
    })

    test("2", async () => {
        await CompanyProfileController.index({ headers: { authorization: "u7djsl186ksk99-DsklLk89" } }, { json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" })
    })

    test("3", async () => {
        await CompanyProfileController.index({ headers: { authorization: "u7djsl186ksk99-DsklLk89" } }, { json: () => "\"{\"x\":5,\"y\":6}\"" })
    })

    test("4", async () => {
        await CompanyProfileController.index({ headers: { authorization: "u7djsl186ksk99-DsklLk89" } }, { json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("5", async () => {
        await CompanyProfileController.index(undefined, undefined)
    })
})
