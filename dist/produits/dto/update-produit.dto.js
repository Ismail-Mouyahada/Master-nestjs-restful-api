"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProduitDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_produit_dto_1 = require("./create-produit.dto");
class UpdateProduitDto extends (0, mapped_types_1.PartialType)(create_produit_dto_1.CreateProduitDto) {
}
exports.UpdateProduitDto = UpdateProduitDto;
//# sourceMappingURL=update-produit.dto.js.map