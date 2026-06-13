router.post(
 "/",
 authMiddleware,
 CredentialController.create
);

router.get(
 "/",
 authMiddleware,
 CredentialController.getAll
);

router.get(
 "/:id",
 authMiddleware,
 CredentialController.getOne
);

router.put(
 "/:id",
 authMiddleware,
 CredentialController.update
);

router.delete(
 "/:id",
 authMiddleware,
 CredentialController.delete
);
