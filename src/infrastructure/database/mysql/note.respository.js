import NoteModel from "../models/Note.model.js";

export default class NoteMySQLRepository {
    async save(noteEntity) {
        // Simplificación: Pasamos el objeto directamente 
        // y usamos get({ plain: true }) para retornar un JS puro
        const note = await NoteModel.create({ ...noteEntity });
        return note.get({ plain: true });
    }

    async findByUserId(userId) {
        // Retornamos los datos planos para que la capa de negocio no dependa de Sequelize
        const notes = await NoteModel.findAll({ where: { userId } });
        return notes.map(note => note.get({ plain: true }));
    }
}