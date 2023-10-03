// NPM Modules
import express from 'express';

// Local Modules
import { CategoryController } from '../controller';
import AuthMiddleware from '../auth/auth.middlware';

const router = express.Router();

// Bouquets
router.get('/allBouquets', CategoryController.getAllBouquets);
router.get('/bouquets/:id', CategoryController.getBouquetById);
router.get('/bouquet/:limit', CategoryController.getBouquetByLimit);
router.post('/bouquets',
    // AuthMiddleware.authenticateFor(['admin']),
    CategoryController.addBouquet);
router.put('/bouquets/:id', CategoryController.updateBouquet);
router.delete('/bouquets/:id', CategoryController.deleteBouquet);

// Gifts
router.get('/allGifts', CategoryController.getAllGifts);
router.get('/gifts/:id', CategoryController.getGiftById);
router.get('/gift/:limit', CategoryController.getGiftByLimit);
router.post('/gifts', CategoryController.addGift);
router.put('/gifts/:id', CategoryController.updateGift);
router.delete('/gifts/:id', CategoryController.deleteGift);

// Wreaths
router.get('/allWreaths', CategoryController.getAllWreaths);
router.get('/wreaths/:id', CategoryController.getWreathById);
router.get('/wreath/:limit', CategoryController.getWreathByLimit);
router.post('/wreaths', CategoryController.addWreath);
router.put('/wreaths/:id', CategoryController.updateWreath);
router.delete('/wreaths/:id', CategoryController.deleteWreath);

// AllByCompanyName
router.get('/all/:usersId', CategoryController. getAllByCompanyName);


export default router;
