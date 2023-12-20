"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCommandeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_commande_dto_1 = require("./create-commande.dto");
class UpdateCommandeDto extends (0, mapped_types_1.PartialType)(create_commande_dto_1.CreateCommandeDto) {
}
exports.UpdateCommandeDto = UpdateCommandeDto;
//# sourceMappingURL=update-commande.dto.js.map