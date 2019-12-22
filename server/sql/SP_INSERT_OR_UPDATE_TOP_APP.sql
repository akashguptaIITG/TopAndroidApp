DROP PROCEDURE IF EXISTS SP_INSERT_OR_UPDATE_TOP_APP;
DELIMITER $$
CREATE  PROCEDURE `SP_INSERT_OR_UPDATE_TOP_APP`(
IN jsonRequest JSON
)
BEGIN
SET @AppId =jsonRequest->>'$.appId';
SET @Cluster =jsonRequest->>'$.cluster';
SET @Title =jsonRequest->>'$.title';
SET @Developer =jsonRequest->>'$.developer';
SET @ImageUrl =jsonRequest->>'$.imageUrl';
SET @Price =jsonRequest->>'$.price';
SET @Rating =jsonRequest->>'$.rating';
SET @AppIdExits =NULL;
SELECT AppId into @AppIdExits FROM top_app where AppId=@AppId LIMIT 1;
IF @AppIdExits IS NULL THEN 
	INSERT INTO top_app(AppId,Cluster,Title,Developer,ImageUrl,Price,Rating)
    VALUES (@AppId,@Cluster,@Title,@Developer,@ImageUrl,@Price,@Rating);
ELSE 
	UPDATE top_app
    SET AppId= COALESCE(@AppId,AppId),
     Cluster= COALESCE(@Cluster,Cluster),
     Title= COALESCE(@Title,Title),
     Developer= COALESCE(@Developer,Developer),
     ImageUrl= COALESCE(@ImageUrl,ImageUrl),
     Price= COALESCE(@Price,Price),
     Rating= COALESCE(@Rating,Rating),
     UpdatedAt=CURRENT_TIMESTAMP
     WHERE AppId=@AppId;
 END IF;    

END$$
DELIMITER ;
