
      const jf_library_items_columns = [
        "Id",
        "Name",
        "ServerId",
        "PremiereDate",
        "DateCreated",
        "EndDate",
        "CommunityRating",
        "RunTimeTicks",
        "ProductionYear",
        "IsFolder",
        "Type",
        "Status",
        "ImageTagsPrimary",
        "ImageTagsBanner",
        "ImageTagsLogo",
        "ImageTagsThumb",
        "BackdropImageTags",
        "ParentId",
        "PrimaryImageHash",
        "archived",
      ];

      const jf_library_items_mapping = (item) => ({
        Id: item.Id,
        Name: item.Name,
        ServerId: item.ServerId,
        PremiereDate: item.PremiereDate,
        DateCreated: item.DateCreated,
        EndDate: item.EndDate,
        CommunityRating: item.CommunityRating,
        RunTimeTicks: item.RunTimeTicks,
        ProductionYear: item.ProductionYear,
        IsFolder: item.IsFolder,
        Type: item.Type,
        Status: item.Status,
        ImageTagsPrimary:
          item.ImageTags && item.ImageTags.Primary ? item.ImageTags.Primary : null,
        ImageTagsBanner:
          item.ImageTags && item.ImageTags.Banner ? item.ImageTags.Banner : null,
        ImageTagsLogo:
          item.ImageTags && item.ImageTags.Logo ? item.ImageTags.Logo : null,
        ImageTagsThumb:
          item.ImageTags && item.ImageTags.Thumb ? item.ImageTags.Thumb : null,
        BackdropImageTags: item.BackdropImageTags[0],
        ParentId: item.ParentId,
        PrimaryImageHash:  item.ImageTags && item.ImageTags.Primary && item.ImageBlurHashes && item.ImageBlurHashes.Primary && item.ImageBlurHashes.Primary[item.ImageTags["Primary"]] ? item.ImageBlurHashes.Primary[item.ImageTags["Primary"]] : null,
        archived: false,
      });

  module.exports = {
    jf_library_items_columns,
    jf_library_items_mapping,
  };