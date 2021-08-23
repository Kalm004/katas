import { expect } from "chai";
import {isTenMinuteWalk} from "./ten-minute-walk";

describe("isTenMinuteWalk", function() {
    it("return if the path is a ten minute walk", function() {
        expect(isTenMinuteWalk(['n', 's'])).to.be.false;
        expect(isTenMinuteWalk(['n', 'w', 'n', 'w', 's', 'n', 's', 'e', 's', 'e'])).to.be.true;
    });
});